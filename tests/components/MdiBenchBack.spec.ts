
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBenchBack from "../../src/components/MdiBenchBack.vue";

test("MdiBenchBack snapshot", () => {
  const wrapper = mount(MdiBenchBack, {});
  expect(wrapper.html()).toMatchSnapshot();
});
