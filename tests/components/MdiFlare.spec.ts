
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlare from "../../src/components/MdiFlare.vue";

test("MdiFlare snapshot", () => {
  const wrapper = mount(MdiFlare, {});
  expect(wrapper.html()).toMatchSnapshot();
});
