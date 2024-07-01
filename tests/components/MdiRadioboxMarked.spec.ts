
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadioboxMarked from "../../src/components/MdiRadioboxMarked.vue";

test("MdiRadioboxMarked snapshot", () => {
  const wrapper = mount(MdiRadioboxMarked, {});
  expect(wrapper.html()).toMatchSnapshot();
});
