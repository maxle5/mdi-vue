
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChiliMediumOutline from "../../src/components/MdiChiliMediumOutline.vue";

test("MdiChiliMediumOutline snapshot", () => {
  const wrapper = mount(MdiChiliMediumOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
