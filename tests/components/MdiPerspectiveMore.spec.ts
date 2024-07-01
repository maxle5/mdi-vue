
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPerspectiveMore from "../../src/components/MdiPerspectiveMore.vue";

test("MdiPerspectiveMore snapshot", () => {
  const wrapper = mount(MdiPerspectiveMore, {});
  expect(wrapper.html()).toMatchSnapshot();
});
