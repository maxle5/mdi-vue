
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChiliOffOutline from "../../src/components/MdiChiliOffOutline.vue";

test("MdiChiliOffOutline snapshot", () => {
  const wrapper = mount(MdiChiliOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
