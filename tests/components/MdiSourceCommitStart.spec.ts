
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourceCommitStart from "../../src/components/MdiSourceCommitStart.vue";

test("MdiSourceCommitStart snapshot", () => {
  const wrapper = mount(MdiSourceCommitStart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
