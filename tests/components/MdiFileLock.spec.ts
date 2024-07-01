
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileLock from "../../src/components/MdiFileLock.vue";

test("MdiFileLock snapshot", () => {
  const wrapper = mount(MdiFileLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
