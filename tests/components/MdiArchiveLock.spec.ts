
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveLock from "../../src/components/MdiArchiveLock.vue";

test("MdiArchiveLock snapshot", () => {
  const wrapper = mount(MdiArchiveLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
