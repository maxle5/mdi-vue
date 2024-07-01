
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarCogOutline from "../../src/components/MdiStarCogOutline.vue";

test("MdiStarCogOutline snapshot", () => {
  const wrapper = mount(MdiStarCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
