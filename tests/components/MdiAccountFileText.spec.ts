
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountFileText from "../../src/components/MdiAccountFileText.vue";

test("MdiAccountFileText snapshot", () => {
  const wrapper = mount(MdiAccountFileText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
