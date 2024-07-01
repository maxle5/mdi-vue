
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCandelabra from "../../src/components/MdiCandelabra.vue";

test("MdiCandelabra snapshot", () => {
  const wrapper = mount(MdiCandelabra, {});
  expect(wrapper.html()).toMatchSnapshot();
});
