
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandExtendedOutline from "../../src/components/MdiHandExtendedOutline.vue";

test("MdiHandExtendedOutline snapshot", () => {
  const wrapper = mount(MdiHandExtendedOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
