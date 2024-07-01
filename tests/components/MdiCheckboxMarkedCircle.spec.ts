
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxMarkedCircle from "../../src/components/MdiCheckboxMarkedCircle.vue";

test("MdiCheckboxMarkedCircle snapshot", () => {
  const wrapper = mount(MdiCheckboxMarkedCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
