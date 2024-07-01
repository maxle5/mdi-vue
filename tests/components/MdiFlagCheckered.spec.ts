
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagCheckered from "../../src/components/MdiFlagCheckered.vue";

test("MdiFlagCheckered snapshot", () => {
  const wrapper = mount(MdiFlagCheckered, {});
  expect(wrapper.html()).toMatchSnapshot();
});
