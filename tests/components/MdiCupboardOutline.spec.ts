
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCupboardOutline from "../../src/components/MdiCupboardOutline.vue";

test("MdiCupboardOutline snapshot", () => {
  const wrapper = mount(MdiCupboardOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
