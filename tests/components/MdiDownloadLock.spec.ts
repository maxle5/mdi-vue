
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDownloadLock from "../../src/components/MdiDownloadLock.vue";

test("MdiDownloadLock snapshot", () => {
  const wrapper = mount(MdiDownloadLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
