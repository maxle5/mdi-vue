
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagText from "../../src/components/MdiTagText.vue";

test("MdiTagText snapshot", () => {
  const wrapper = mount(MdiTagText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
