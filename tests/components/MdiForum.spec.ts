
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiForum from "../../src/components/MdiForum.vue";

test("MdiForum snapshot", () => {
  const wrapper = mount(MdiForum, {});
  expect(wrapper.html()).toMatchSnapshot();
});
