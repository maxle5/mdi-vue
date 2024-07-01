
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogOffOutline from "../../src/components/MdiCogOffOutline.vue";

test("MdiCogOffOutline snapshot", () => {
  const wrapper = mount(MdiCogOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
