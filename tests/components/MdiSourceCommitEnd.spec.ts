
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourceCommitEnd from "../../src/components/MdiSourceCommitEnd.vue";

test("MdiSourceCommitEnd snapshot", () => {
  const wrapper = mount(MdiSourceCommitEnd, {});
  expect(wrapper.html()).toMatchSnapshot();
});
