
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNewspaperPlus from "../../src/components/MdiNewspaperPlus.vue";

test("MdiNewspaperPlus snapshot", () => {
  const wrapper = mount(MdiNewspaperPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
