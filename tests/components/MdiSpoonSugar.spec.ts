
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpoonSugar from "../../src/components/MdiSpoonSugar.vue";

test("MdiSpoonSugar snapshot", () => {
  const wrapper = mount(MdiSpoonSugar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
