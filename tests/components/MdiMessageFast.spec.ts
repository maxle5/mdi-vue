
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageFast from "../../src/components/MdiMessageFast.vue";

test("MdiMessageFast snapshot", () => {
  const wrapper = mount(MdiMessageFast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
