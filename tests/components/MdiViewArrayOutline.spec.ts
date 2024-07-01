
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewArrayOutline from "../../src/components/MdiViewArrayOutline.vue";

test("MdiViewArrayOutline snapshot", () => {
  const wrapper = mount(MdiViewArrayOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
