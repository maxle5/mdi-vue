
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWardrobe from "../../src/components/MdiWardrobe.vue";

test("MdiWardrobe snapshot", () => {
  const wrapper = mount(MdiWardrobe, {});
  expect(wrapper.html()).toMatchSnapshot();
});
