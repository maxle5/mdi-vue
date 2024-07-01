
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChiliHot from "../../src/components/MdiChiliHot.vue";

test("MdiChiliHot snapshot", () => {
  const wrapper = mount(MdiChiliHot, {});
  expect(wrapper.html()).toMatchSnapshot();
});
