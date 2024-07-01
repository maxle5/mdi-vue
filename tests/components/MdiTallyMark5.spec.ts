
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTallyMark5 from "../../src/components/MdiTallyMark5.vue";

test("MdiTallyMark5 snapshot", () => {
  const wrapper = mount(MdiTallyMark5, {});
  expect(wrapper.html()).toMatchSnapshot();
});
