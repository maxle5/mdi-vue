
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileVideoOutline from "../../src/components/MdiFileVideoOutline.vue";

test("MdiFileVideoOutline snapshot", () => {
  const wrapper = mount(MdiFileVideoOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
