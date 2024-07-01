
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountTagOutline from "../../src/components/MdiAccountTagOutline.vue";

test("MdiAccountTagOutline snapshot", () => {
  const wrapper = mount(MdiAccountTagOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
