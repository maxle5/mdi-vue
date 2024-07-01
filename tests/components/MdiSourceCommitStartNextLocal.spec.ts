
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourceCommitStartNextLocal from "../../src/components/MdiSourceCommitStartNextLocal.vue";

test("MdiSourceCommitStartNextLocal snapshot", () => {
  const wrapper = mount(MdiSourceCommitStartNextLocal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
