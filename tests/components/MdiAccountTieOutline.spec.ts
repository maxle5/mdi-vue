
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountTieOutline from "../../src/components/MdiAccountTieOutline.vue";

test("MdiAccountTieOutline snapshot", () => {
  const wrapper = mount(MdiAccountTieOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
