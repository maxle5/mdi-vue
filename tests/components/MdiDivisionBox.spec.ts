
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDivisionBox from "../../src/components/MdiDivisionBox.vue";

test("MdiDivisionBox snapshot", () => {
  const wrapper = mount(MdiDivisionBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
