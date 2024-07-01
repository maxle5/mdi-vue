
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMower from "../../src/components/MdiMower.vue";

test("MdiMower snapshot", () => {
  const wrapper = mount(MdiMower, {});
  expect(wrapper.html()).toMatchSnapshot();
});
