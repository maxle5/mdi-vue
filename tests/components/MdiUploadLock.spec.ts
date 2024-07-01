
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUploadLock from "../../src/components/MdiUploadLock.vue";

test("MdiUploadLock snapshot", () => {
  const wrapper = mount(MdiUploadLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
