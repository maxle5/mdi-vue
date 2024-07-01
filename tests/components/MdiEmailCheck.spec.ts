
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailCheck from "../../src/components/MdiEmailCheck.vue";

test("MdiEmailCheck snapshot", () => {
  const wrapper = mount(MdiEmailCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
