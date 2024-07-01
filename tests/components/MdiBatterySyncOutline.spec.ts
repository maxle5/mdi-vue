
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatterySyncOutline from "../../src/components/MdiBatterySyncOutline.vue";

test("MdiBatterySyncOutline snapshot", () => {
  const wrapper = mount(MdiBatterySyncOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
