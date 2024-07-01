
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChiliHotOutline from "../../src/components/MdiChiliHotOutline.vue";

test("MdiChiliHotOutline snapshot", () => {
  const wrapper = mount(MdiChiliHotOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
