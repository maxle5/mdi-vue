
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMulticast from "../../src/components/MdiMulticast.vue";

test("MdiMulticast snapshot", () => {
  const wrapper = mount(MdiMulticast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
