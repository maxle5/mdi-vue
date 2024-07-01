
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterMenuOutline from "../../src/components/MdiFilterMenuOutline.vue";

test("MdiFilterMenuOutline snapshot", () => {
  const wrapper = mount(MdiFilterMenuOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
