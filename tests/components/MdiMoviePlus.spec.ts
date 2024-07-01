
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMoviePlus from "../../src/components/MdiMoviePlus.vue";

test("MdiMoviePlus snapshot", () => {
  const wrapper = mount(MdiMoviePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
