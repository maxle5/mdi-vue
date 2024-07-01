
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeSearchOutline from "../../src/components/MdiHomeSearchOutline.vue";

test("MdiHomeSearchOutline snapshot", () => {
  const wrapper = mount(MdiHomeSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
