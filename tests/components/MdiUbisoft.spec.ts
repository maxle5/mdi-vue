
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUbisoft from "../../src/components/MdiUbisoft.vue";

test("MdiUbisoft snapshot", () => {
  const wrapper = mount(MdiUbisoft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
