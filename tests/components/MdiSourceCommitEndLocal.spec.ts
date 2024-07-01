
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourceCommitEndLocal from "../../src/components/MdiSourceCommitEndLocal.vue";

test("MdiSourceCommitEndLocal snapshot", () => {
  const wrapper = mount(MdiSourceCommitEndLocal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
