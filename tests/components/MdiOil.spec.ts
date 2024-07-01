
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOil from "../../src/components/MdiOil.vue";

test("MdiOil snapshot", () => {
  const wrapper = mount(MdiOil, {});
  expect(wrapper.html()).toMatchSnapshot();
});
