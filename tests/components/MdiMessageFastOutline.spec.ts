
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageFastOutline from "../../src/components/MdiMessageFastOutline.vue";

test("MdiMessageFastOutline snapshot", () => {
  const wrapper = mount(MdiMessageFastOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
