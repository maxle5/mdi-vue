
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailFastOutline from "../../src/components/MdiEmailFastOutline.vue";

test("MdiEmailFastOutline snapshot", () => {
  const wrapper = mount(MdiEmailFastOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
