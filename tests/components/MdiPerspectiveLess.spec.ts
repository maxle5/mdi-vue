
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPerspectiveLess from "../../src/components/MdiPerspectiveLess.vue";

test("MdiPerspectiveLess snapshot", () => {
  const wrapper = mount(MdiPerspectiveLess, {});
  expect(wrapper.html()).toMatchSnapshot();
});
