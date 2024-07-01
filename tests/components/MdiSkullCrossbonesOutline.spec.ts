
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkullCrossbonesOutline from "../../src/components/MdiSkullCrossbonesOutline.vue";

test("MdiSkullCrossbonesOutline snapshot", () => {
  const wrapper = mount(MdiSkullCrossbonesOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
