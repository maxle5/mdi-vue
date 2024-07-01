
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookPlayOutline from "../../src/components/MdiBookPlayOutline.vue";

test("MdiBookPlayOutline snapshot", () => {
  const wrapper = mount(MdiBookPlayOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
