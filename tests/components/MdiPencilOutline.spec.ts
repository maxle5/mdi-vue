
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilOutline from "../../src/components/MdiPencilOutline.vue";

test("MdiPencilOutline snapshot", () => {
  const wrapper = mount(MdiPencilOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
