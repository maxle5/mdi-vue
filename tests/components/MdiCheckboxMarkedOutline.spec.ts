
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxMarkedOutline from "../../src/components/MdiCheckboxMarkedOutline.vue";

test("MdiCheckboxMarkedOutline snapshot", () => {
  const wrapper = mount(MdiCheckboxMarkedOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
