
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFacebookWorkplace from "../../src/components/MdiFacebookWorkplace.vue";

test("MdiFacebookWorkplace snapshot", () => {
  const wrapper = mount(MdiFacebookWorkplace, {});
  expect(wrapper.html()).toMatchSnapshot();
});
