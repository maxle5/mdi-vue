
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTallyMark2 from "../../src/components/MdiTallyMark2.vue";

test("MdiTallyMark2 snapshot", () => {
  const wrapper = mount(MdiTallyMark2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
